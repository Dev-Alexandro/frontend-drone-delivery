import Button from '@mui/material/Button';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import { Content, Container } from '@/styles/global';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { auth } from '@/services/auth';
import { calcDelivery } from '@/services/delivery';
import { stat } from 'fs';

export default function Home() {

    const [previouslyTrips, setPreviouslyTrips] = useState<any[]>([]);
    const [actualTrip, setActualTrip] = useState<string>('');
    const [start_point, setStartPoint] = useState<string>('');
    const [pickup_point, setPickupPoint] = useState<string>('');
    const [delivery_point, setDeliveryPoint] = useState<string>('');
    const [autehnticated, setAuthenticated] = useState<boolean>(false);



    const TripList = () => (

        <List>
            {previouslyTrips.map((item, index) => (
                <ListItem key={index}>
                    <ListItemText primary={index + 1 + item} />
                </ListItem>
            ))}
        </List>
    );

    const addTrip = (newTrip: any) => {


        setPreviouslyTrips((prevTrips) => {
            const newTrips = [...prevTrips, newTrip];
            if (newTrips.length > 10) {
                newTrips.shift();
            }
            return newTrips;
        });


    };

    async function getDeliveryData() {

        Cookies.remove('TOKEN_JWT');
        const auth_ = await auth();

        if (auth_ === true) {

            let result = await calcDelivery(start_point, pickup_point, delivery_point);
            let path1: any = [];
            for (let i = 0; i < result.path1.length; i++) {

                if (i % 2 === 0) {

                    if (result.path1.length - 1 == i) {

                        path1.push(result.path1[i - 1]);
                        path1.push(result.path1[i]);

                    } else {

                        if (i == 0) {
                            path1.push(result.path1[i]);

                        } else {

                            path1.push(result.path1[i - 1]);
                        }

                    }

                } else {

                    path1.push(result.path1[i]);

                }
            }

            let formattedPath1Result = '';

            for (let i = 0; i < path1.length; i++) {

                formattedPath1Result += path1[i];

                if (i < path1.length - 1 && i % 2 === 0) {
                    formattedPath1Result += '-';
                }
                if (i % 2 === 1 && i < path1.length - 1) {
                    formattedPath1Result += '+';
                }
            }


            let path2: any = [];
            for (let i = 0; i < result.path2.length; i++) {

                if (i % 2 === 0) {

                    if (result.path2.length - 1 == i) {

                        path2.push(result.path2[i - 1]);
                        path2.push(result.path2[i]);

                    } else {

                        if (i == 0) {
                            path2.push(result.path2[i]);

                        } else {

                            path2.push(result.path2[i - 1]);
                        }

                    }


                } else {

                    path2.push(result.path2[i]);

                }
            }

            let formattedPath2Result = '';

            for (let i = 0; i < path2.length; i++) {

                formattedPath2Result += path2[i];

                if (i < path2.length - 1 && i % 2 === 0) {

                    formattedPath2Result += '-';

                }
                if (i % 2 === 1 && i < path2.length - 1) {

                    formattedPath2Result += '+';

                }
            }

            let trip: string = 'The set delivery will have the route ' + formattedPath1Result + '+' + formattedPath2Result + ' and will take ' + result.totalCost + ' seconds to be delivered as fast as possible.';
            setActualTrip(trip);


            if (previouslyTrips.length > 10) {

                let updatedTrips = previouslyTrips.shift();
                setPreviouslyTrips(updatedTrips);

            }
            addTrip(`– From ${start_point}, picking-up at ${pickup_point} to ${delivery_point} in ${result.totalCost} seconds`);


        }


    }

    function handleInputStartPoint(event: React.ChangeEvent<HTMLInputElement>) {

        event.target.value = event.target.value.toUpperCase();
        setStartPoint(event.target.value.toUpperCase());

    }

    function handleInputPickupPoint(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.value = event.target.value.toUpperCase();
        setPickupPoint(event.target.value.toUpperCase());
    }

    function handleInputDeliveryPoint(event: React.ChangeEvent<HTMLInputElement>) {
        event.target.value = event.target.value.toUpperCase();
        setDeliveryPoint(event.target.value.toUpperCase());
    }



    useEffect(() => {

        if (!autehnticated) {

            auth();
            setAuthenticated(true);

        }

    }, []);


    return (

        <Container>
            <Content>


                <div className='card-calc' >

                    <div className='title'>

                        Input the coordinates

                    </div>
                    <div className='div-input'>
                        <div className='title-input'>
                            Drone Start
                        </div>

                        <TextField inputProps={{ style: { textAlign: 'center' } }} onChange={handleInputStartPoint} id='start_point' className='input' label="" />

                    </div>

                    <div className='div-input'>
                        <div className='title-input'>
                            Object pick-up
                        </div>

                        <TextField inputProps={{ style: { textAlign: 'center' } }} onChange={handleInputPickupPoint} id='pickup_point' className='input' label="" />

                    </div>

                    <div className='div-input'>
                        <div className='title-input'>

                            Delivery destination

                        </div>

                        <TextField inputProps={{ style: { textAlign: 'center' } }} onChange={handleInputDeliveryPoint} id='delivery_point' className='input' label="" />

                    </div>



                    <div className='button'>
                        <Button onClick={() => getDeliveryData()} variant="contained">Calculate
                            fastest route
                        </Button>
                    </div>




                </div>
                <div className='card-results' >

                    <div className='describe-result'>

                        <div id='result1'> {actualTrip} </div>

                    </div>


                    <div className='last-deliverieas'>
                        <p>Last deliverieas:</p>
                        <TripList />
                    </div>



                </div>
            </Content>
        </Container>

    )
}
