import React from "react";
import { Card, Icon } from "semantic-ui-react";

const CardExampleCardProps = () => {
    <Card
        image="/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    />;

    return (
        <div div class="ui card">
            <div class="image">
                <img src="/images/avatar/large/elliot.jpg" />
            </div>
            <div class="content">
                <div class="header">Elliot Baker</div>
                <div class="meta">Friend</div>
                <div class="description">
                    Elliot is a sound engineer living in Nashville who enjoys
                    playing guitar and hanging with his cat.
                </div>
            </div>
        </div>
    );
};
export default CardExampleCardProps;
