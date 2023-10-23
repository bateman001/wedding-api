CREATE TABLE guest(
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  attending BOOLEAN DEFAULT false,
  meal TEXT,
  party_id INTEGER REFERENCES party(id) ON DELETE CASCADE NOT NULL
);