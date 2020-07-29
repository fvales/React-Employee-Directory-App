import React from "react";
import Card from 'react-bootstrap/Card'
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";

const dashboard = () => {
    const cards = [
        {
            name: "Employee Directory",
            route: "/Employee_Directory"
        }
    ];
    return (
        <>
            <h3>Dashboard</h3>
            <div className={classes.CardContainer}>
                {cards.map(card => (

                    <Card className={classes.card} key={card.name}>
                        <Link to={card.route} className={classes.CardLink}>
                            <Card.Body>{card.name}</Card.Body>
                        </Link>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default dashboard;
