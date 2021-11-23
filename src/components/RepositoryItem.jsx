import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';

export default function RepositoryItem({ name, fullName, description, linkToRepo }) {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h5' component='div'>
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' href={linkToRepo} target='_blank'>
                        {fullName}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
