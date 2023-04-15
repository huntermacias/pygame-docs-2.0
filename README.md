# Pygame Documentation 2.0
#### Welcome to the Project Name repository! This project is an open-source project that you can contribute to. This document will provide information on how to contribute and get started.

## Live Demo: 
#### [PyGame Docs](https://pydocs.huntermacias.io)

## Installation
#### To get started, you need to clone this repository to your local machine. You can do this by running the following command in your terminal:

```terminal
git clone https://github.com/huntermacias/revamed-pygame-docs.git
```

#### Next, navigate to the project directory:

```terminal
cd revamed-pygame-docs
```

#### Then, install the project dependencies:

```terminal
npm install
```
## Contributing

##### We welcome contributions from anyone who is interested in improving this project. If you are new to open-source contributions, check out the GitHub documentation on contributing to open-source projects.

### Create Default Table - Supabase

##### To add the default table for Pygame tutorial steps, follow these steps:

1. Log in to your Supabase account.
2. Create a new table by clicking on the "New Table" button.
3. Set the table name and the schema to public.
4. In the "SQL" tab, paste the following code:
```sql
-- Create a table
CREATE TABLE <tableName> (
    id SERIAL PRIMARY KEY,
    title TEXT,
    short_desc TEXT,
    description TEXT,
    key TEXT,
    code_sample TEXT
);
-- Insert Row into table
INSERT INTO <tableName> (title, short_desc, description, key, code_sample)
VALUES (
    'Title',
    'About this Section',
    'Description',
    'Key',
    'Code Sample'
);
```
5. Click on "Save" to create the table and insert the default data.
6. You should now have a new table called pygame_steps with the default Pygame tutorial steps data.
##### Note: Make sure that you have the correct schema selected before running the SQL queries. Also, if you already have a table with thesame name as another in your Supabase database, running these queries will overwrite the existing data.
<<<<<<< HEAD


=======
>>>>>>> d242e5923dfa050a6b5aab68f51f2c44c9ed696d

## Issues

#### If you find an issue with the project or have a feature request, you can create a new issue on our GitHub issues page. When creating a new issue, please provide as much detail as possible about the issue or feature request.

## Contributing

#### If you would like to contribute to the project, you can do so by creating a pull request. Here are the steps to create a pull request:

1. Fork this repository to your own GitHub account.
2. Clone the forked repository to your local machine
3. Create a new branch for your changes


```terminal
git checkout -b my-new-feature
```
4. Make the necessary changes to the code.
5. Commit your changes

```terminal
git commit -m 'Add some feature'

```
6. Push your changes to your forked repository

```terminal
git push origin my-new-feature
```

7. Create a new pull request on the original repository

## Development
#### To start the development server, run the following command: 
```terminal
npm run dev
```
#### This will start the development server at `http://localhost:3000`

