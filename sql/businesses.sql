create table businesses (
  id uuid primary key,
  business_name varchar(100),
  business_owner varchar(100),
  is_active boolean,
  created_at timestamp,
  updated_at timestamp
);
