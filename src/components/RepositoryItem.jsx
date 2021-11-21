import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';

export default function RepositoryItem({ name, fullName, description, linkToRepo }) {
    return (
        <Box sx={{ minWidth: 275 }}>
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
        </Box>
    );
}
