import { CarCard } from "@/components";
import { sql } from "@vercel/postgres";
import { Fragment } from "react";
//import { Car1 } from "@/data";

export default async function CarSql() {
    const { rows } = await sql`SELECT * from vehicles`;
    // const createTable = await sql`
    // CREATE TABLE IF NOT EXISTS vehicles (
    //   id SERIAL PRIMARY KEY,
    //   title VARCHAR(255) NOT NULL,
    //   brand VARCHAR(255) NOT NULL,
    //   price INT NOT NULL,
    //   type VARCHAR(255) NOT NULL,
    //   image VARCHAR(255) NOT NULL,
    //   engine INT NOT NULL,
    //   turbo INT NOT NULL,
    //   brake INT NOT NULL,
    //   trans INT NOT NULL,
    //   susp INT NOT NULL,
    //   sell boolean NOT NULL DEFAULT false,
    //   "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    // );
    // `


    //console.log(createTable);
    // Car1.map(async (item) => {
    //     const veh = await Promise.all([
    //         sql`
    //             INSERT INTO vehicles (title, brand, price, type, image, engine, turbo, brake, trans, susp)
    //             VALUES (${item.title}, ${item.brand}, ${item.price}, ${item.type}, ${item.image}, ${item.engine}, ${item.turbo}, ${item.brake}, ${item.trans}, ${item.susp})
    //         `
    //     ])
    //     console.log(veh)
    // })

    console.log(rows);
    return {
        props: {
            rows
        }
    }
}