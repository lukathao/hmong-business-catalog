create table business_address (
  id uuid primary key,
  business_id varchar(100),
  address varchar(100),
  address_city varchar(100),
  address_state varchar(100),
  address_code varchar(32),
  coordinates varchar(32),
  country varchar(100), 
  created_at timestamp, 
  updated_at timestamp
);
