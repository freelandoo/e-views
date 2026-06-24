-- 168 — Renomeia o conceito "Poléns" -> "Flames" no schema do banco.
-- Dinâmico e idempotente: renomeia toda TABELA e toda COLUNA cujo nome
-- contenha 'polen' (em public), trocando 'polen' por 'flame'. Após rodar,
-- não sobra nenhum identificador 'polen' — re-execução é no-op.
--
-- Índices/constraints com 'polen' no nome NÃO são renomeados de propósito:
-- são internos e o código não os referencia por nome (usa ON CONFLICT por
-- coluna). Sequences seguem o OID da coluna, então o rename de tabela basta.

DO $$
DECLARE
  r RECORD;
BEGIN
  -- 1) Tabelas:  *polen*  ->  *flame*
  FOR r IN
    SELECT tablename
    FROM pg_tables
    WHERE schemaname = 'public' AND tablename LIKE '%polen%'
  LOOP
    EXECUTE format(
      'ALTER TABLE public.%I RENAME TO %I',
      r.tablename, replace(r.tablename, 'polen', 'flame')
    );
  END LOOP;

  -- 2) Colunas com 'polen' no nome (em qualquer tabela base do schema public)
  FOR r IN
    SELECT c.table_name, c.column_name
    FROM information_schema.columns c
    JOIN pg_tables t
      ON t.schemaname = 'public' AND t.tablename = c.table_name
    WHERE c.table_schema = 'public' AND c.column_name LIKE '%polen%'
  LOOP
    EXECUTE format(
      'ALTER TABLE public.%I RENAME COLUMN %I TO %I',
      r.table_name, r.column_name, replace(r.column_name, 'polen', 'flame')
    );
  END LOOP;
END $$;
