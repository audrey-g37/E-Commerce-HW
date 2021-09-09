# E-Commerce-HW ![License Image](https://img.shields.io/badge/license-MIT-blue)

## Description

The purpose of this app is to be able to add, edit, and remove descriptors of retail items from a database. The descriptors include 'product,' 'category,' and 'tag.' The retail item descriptors work together; for example, a 'product' has a 'category' it belongs to, and the product can have multiple 'tags.' A real-life example would be a 'product' of a children's green ninja turtle t-shirt. The 'category' might be children's clothing. Two 'tags' might be green and t-shirt.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Assets](#assets)
- [License](#license)
- [GitHub Profile](#github-profile)
- [Contact by Email](#email)

## Installation

Run npm i to install necessary libraries.

## Usage

Create a .env file with the three lines shown below. Type the database name you want to use after the DB_NAME=, the location after DB_USER=, and your mysql password after DB_PW=.

![Needed in Env File](./Images/envRequirements.png)

\*Note: make sure the database name in the db directory on the schema.sql file matches the one you used on your .env file.

After creating the .env file, you're ready to roll! Open a terminal session and 'npm run mysql' then enter your password. Then type 'source db/schema.sql' to drop and create the database. Make sure to type 'exit' to end the mysql shell. Alternatively, you could copy the code in the schema.sql file into a mysql workbench.

After creating the database, we need to put data into the tables. To use the pre-written data, type 'npm run seed' and pre-generated data will be inserted.

## Assets

[Demo Video Part 1](https://drive.google.com/file/d/1J79HAS84JMJRuSxTL0i8jMq6tIvRDuTh/view?usp=sharing)

[Demo Video Part 2](https://drive.google.com/file/d/1nBhZ4-Qv5R3ucFc8DRheDtMthKHhG0iV/view?usp=sharing)

## License

This project is licensed with MIT.

### GitHub Profile

[My Profile](https://github.com/audrey-g37)

### Email

audrey.gillies@gmail.com
