create table vocabulary_set (
    "id" uuid default gen_random_uuid() primary key,
    "inserted_at" timestamp with time zone default timezone('utc'::text, now()) not null,
    "updated_at" timestamp with time zone default timezone('utc'::text, now()) not null,
    "name" varchar(200) not null,
    "data" jsonb not null,
    "owner_user_id" uuid
);
comment on table vocabulary_set is 'Vocabulary set';


alter table vocabulary_set enable row level security;

create policy "Allow logged-in read access" on vocabulary_set
  for select using ( false );

create policy "Allow individual insert access" on vocabulary_set
  for insert with check ( false );

create policy "Allow individual update access" on vocabulary_set
  for update using ( auth.uid() = owner_user_id );


alter table vocabulary_set
  replica identity full;


create or replace function vocabulary_set_create(
  name varchar(200),
  out new_id uuid
)
returns uuid as
$$
  begin
    insert into vocabulary_set ("name", "data", "owner_user_id") 
    values (name, '{}', auth.uid())
    returning id into new_id;
  end;
$$
language plpgsql security definer;
