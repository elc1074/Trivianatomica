create table if not exists units (
  id text primary key,
  order_index integer not null unique,
  title_es text not null,
  title_pt text not null
);

create table if not exists lessons (
  id text primary key,
  unit_id text not null references units (id) on delete cascade,
  order_index integer not null,
  title_es text not null,
  title_pt text not null,
  unique (unit_id, order_index)
);

create table if not exists exercises (
  lesson_id text not null references lessons (id) on delete cascade,
  id text not null,
  format text not null check (format in ('seta', 'verdadeiro-falso', 'completar', 'associacao')),
  order_index integer not null,
  data_es jsonb not null,
  data_pt jsonb not null,
  primary key (lesson_id, id)
);

create index if not exists lessons_unit_id_order_idx on lessons (unit_id, order_index);
create index if not exists exercises_lesson_id_order_idx on exercises (lesson_id, order_index);

alter table units enable row level security;
alter table lessons enable row level security;
alter table exercises enable row level security;

grant usage on schema public to service_role;
grant select, insert, update, delete on units, lessons, exercises to service_role;