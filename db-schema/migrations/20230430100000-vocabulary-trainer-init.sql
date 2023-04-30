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
  for select using (auth.role() = 'authenticated');

create policy "Allow individual insert access" on vocabulary_set
  for insert with check (auth.uid() = owner_user_id);

create policy "Allow individual update access" on vocabulary_set
  for update using ( auth.uid() = owner_user_id );


alter table vocabulary_set
  replica identity full;
