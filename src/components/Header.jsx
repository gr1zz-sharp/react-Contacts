import { Container, Navbar, Button } from "react-bootstrap";

const Header = ({title, onAddClick, tab}) => {
    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {tab === 'view' && (
                            <Button onClick={() => onAddClick('add')}>Add Contact</Button>
                        )}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;