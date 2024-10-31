import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import { Activity } from "../../../app/Models/activity";
import ActivityForm from "../forms/ActivityForm";

interface Props {
    activities: Activity[];
}

export default function ActivityDashbord({ activities }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} />
            </Grid.Column>
            <Grid.Column width='6'>
                {activities[0] &&
                    <ActivityDetails activity={activities[0]} />}
                    <ActivityForm />
            </Grid.Column>
        </Grid>
    );
}