import React from "react";
import Card from 'react-bootstrap/Card'
import classes from "./Dashboard.module.css";
import { Link, withRouter } from "react-router-dom";
import Toolbar from "../Layout/Toolbar/Toolbar";

const dashboard = (props) => {
    const cards = [
        {
            name: "Employee Directory",
            route: "/Employee_Directory"
        }
    ];
    return (
        <>
            <Toolbar title="Dashboard" historyObj={props.history} />
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

export default withRouter(dashboard);
