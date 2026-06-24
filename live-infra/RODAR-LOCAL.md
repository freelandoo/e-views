# Rodar as Lives no PC local

Guia rápido pra transmitir/assistir live na sua máquina. Três peças: **LiveKit**
(servidor de mídia), **backend** (tokens + sessões) e **frontend** (UI no /bees).

## 1. Subir o LiveKit (servidor de live)

```powershell
docker compose -f live-infra/docker-compose.yml up -d
# ver log:  docker compose -f live-infra/docker-compose.yml logs -f
# parar:    docker compose -f live-infra/docker-compose.yml down
```

Modo `--dev` → chaves fixas `devkey` / `secret`, sinalização em `ws://localhost:7880`.
Confere se subiu: `docker ps` deve listar `freelandoo-livekit-dev` (portas 7880-7882).

## 2. Backend

O backend já lê os defaults do LiveKit (`ws://localhost:7880`, `devkey`/`secret`) —
as vars também estão no `.env` (bloco "LIVES (LiveKit)"). Nada a configurar pra dev.

```powershell
cd freelandoo-backend
npm install          # primeira vez (instala livekit-server-sdk)
npm start            # roda migrations (133/134 — enum + presentes) e sobe na :3000
```

> Use `npm start` (não `npm run dev`) pelo menos uma vez: o `prestart` aplica as
> migrations 133 (`spend_live_gift`) e 134 (`earn_live_gift` + 2 presentes de teste
> "Aplausos" e "Estrela"). Depois pode usar `npm run dev` no dia a dia.

## 3. Frontend

Aponte o frontend para o backend local **só se** for testar com o backend local.
No `.env.local`:

```
BACKEND_API_URL=http://localhost:3000
```

(Se deixar apontando pro Railway, o front fala com o backend de produção — também
funciona, desde que o LiveKit de produção esteja configurado lá.)

```powershell
cd "freelandoo frontend/freelandoo-website-main"
npm install          # primeira vez (instala livekit-client)
npm run dev          # sobe na :3000 do Next (ou a porta que o Next escolher)
```

## 4. Testar

1. Login com um usuário cujo **subperfil tenha assinatura ativa** (`is_paid`).
2. Abra **/bees** → botão flutuante **LIVE** (canto superior direito).
3. **Ir ao vivo** → escolha o subperfil (só os "Ativo" transmitem), escolha um
   filtro se quiser, **Iniciar transmissão**.
4. Em outra aba/navegador (outro usuário logado), abra /bees → LIVE → toque no card
   da live pra assistir. Teste o **chat** e os **presentes** (gastam Poléns; o valor
   é repassado ao criador da live).

## Notas

- **Mesma máquina** (localhost) funciona direto. Pra outra pessoa assistir de outro
  dispositivo na sua rede/Internet, o LiveKit `--dev` não basta (precisa IP público
  + TURN) — isso é a fase Hetzner.
- Câmera/microfone exigem **HTTPS ou localhost**. `localhost` é tratado como seguro
  pelo navegador, então o preview/transmissão funcionam em dev.
- Sem gravação: quando a live encerra, some (nada vai pro R2).
