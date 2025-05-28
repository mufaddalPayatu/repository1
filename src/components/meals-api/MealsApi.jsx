import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

const MealsApi = () => {
    
    const [data, setData] = useState([]);
    const [val, setVal] = useState(1);
    // console.log("State : ", items);
    async function fun(){
        const response =await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("api discussion",response.data);
        setData(response.data)
        setTimeout(async () => {
            const response =await axios.get("https://jsonplaceholder.typicode.com/todos/2");
            setData(response.data)
        }, 4000);
    }
    // fetch().then().then().catch();
    async function dynamicFunc(){
        const res =await axios.get(`https://jsonplaceholder.typicode.com/todos/${val}`);
        setData(res.data)
    }
    // useEffect(() => {
    //     // const response =await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    //     fun();
    // }, []);

    useEffect(()=>{
        if(val)
        dynamicFunc();
    },[val]);

  return (
    <>
        <Container className='my-5'>
            <Row>
                <Col>
                    <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">MEALSAPI COMPONENT</h1>
                </Col>
            </Row>
        </Container>
        <input 
        value={val}
        onChange={(e)=>{
            setVal(e.target.value)
            if(e.target.value){
            }
        }}/>
        {data && data.title}
        {/* <Container className='my-5'>
            <Row>
                {items.map((item, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='my-3'>
                        <Card className='shadow'>
                            <Card.Header>
                                <Image src={item.strMealThumb} alt={item.strMeal} fluid />
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{item.strMeal}</Card.Title>
                                <Card.Text>#{item.idMeal}</Card.Text>
                            </Card.Body>
                            
                            <Card.Footer>
                                <Button variant='primary' className="float-end">Order</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container> */}
    </>
  )
}

export default MealsApi