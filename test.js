import { Box, Card, CardContent, Typography, Container } from '@mui/material';

function code() {
  const documentation = `This is sample documentation for the diagrams displayed on the left. You can add more text here as needed.`;

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box display="flex" alignItems="flex-start">
        {/* Left: Diagram Cards in responsive wrap */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            flex: 1, // allow to take available space
          }}
        >
          {diagrams.map((diagram) => (
            <Card key={diagram.id} sx={{ width: '300px' }}>
              <CardContent>
                <Typography variant="h6">Diagram {diagram.id}</Typography>
                <MermaidDiagram>{diagram.diagramText}</MermaidDiagram>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Right: Fixed documentation */}
        <Box
          sx={{
            width: '300px',
            ml: 3,
            position: 'sticky',
            top: 20,
            alignSelf: 'flex-start',
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h6">Documentation</Typography>
              <Typography variant="body2">{documentation}</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default code;
