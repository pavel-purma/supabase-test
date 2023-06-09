create table test_table2 (
    "id" uuid default gen_random_uuid() primary key,
    "inserted_at" timestamp with time zone default timezone('utc'::text, now()) not null,
    "updated_at" timestamp with time zone default timezone('utc'::text, now()) not null,
    "name" varchar(200) not null,
    "data" jsonb not null,
    "owner_user_id" uuid
);
comment on table test_table2 is 'Vocabulary set - test table';


alter table test_table2 enable row level security;

create policy "Allow logged-in read access" on test_table2
  for select using (auth.role() = 'authenticated');

create policy "Allow individual insert access" on test_table2
  for insert with check (auth.uid() = owner_user_id);

create policy "Allow individual update access" on test_table2
  for update using ( auth.uid() = owner_user_id );


alter table test_table2
  replica identity full;
