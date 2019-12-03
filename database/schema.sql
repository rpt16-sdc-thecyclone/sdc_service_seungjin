DROP SCHEMA IF EXISTS sdcSchema;

CREATE SCHEMA sdcSchema;

DROP TABLE IF EXISTS sdcSchema.description;

CREATE TABLE sdcSchema.description (
  id SERIAL PRIMARY KEY,
  list_date TIMESTAMP,
  condition TEXT,
  brand TEXT,
  type TEXT,
  packaging TEXT,
  material TEXT,
  rec_age TEXT,
  char_family TEXT,
  manufactured TEXT,
  era TEXT,
  year INTEGER,
  size VARCHAR,
  upc INTEGER,
  seller_prod_desc TEXT,
  seller_item_des TEXT,
  seller_img_url TEXT,
  hand_item_location TEXT,
  hand_ship_to TEXT,
  hand_ship_excludes TEXT,
  hand_qty INTEGER,
  ship_cost NUMERIC(15,2),
  ship_region TEXT,
  ship_service TEXT,
  ship_est_time DATE,
  return_exist TEXT,
  return_deadline INTEGER,
  return_type TEXT,
  return_pay_shipping TEXT
);