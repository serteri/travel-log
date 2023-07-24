import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const UserProfile = ({ match }) => {
  const [user, setUser] = useState({ username: '', locations: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/users/${match.params.id}`);
      setUser(result.data);
    };

    fetchData();
  }, [match.params.id]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>{user.username}'s Profile</h2>
          {user.locations.map((location, index) => (
            <Card key={index} className="mb-4">
              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Image src={location.picture} alt={location.name} fluid />
                <Card.Text>{location.note}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
