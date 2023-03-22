import Grid from '@mui/material/Grid';
import React from 'react';
import useSWR from 'swr';
import { AnimalCard } from '@/components/animal-card';
import { AnimalController } from '@/controllers';


export default function ListAnimal({ animals }) {
    const { data } = useSWR('/animal', AnimalController.list)
    animals = data?.data;

    return (
        <div>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="stretch" spacing={2}>
                        {animals ? animals.map(animal => (
                            <Grid key={animal} item xs={4}>
                                <AnimalCard
                                    name={animal.name}
                                    breed={animal.breed}
                                    gender={animal.gender}
                                    isVaccinated={animal.isVaccinated}
                                    vaccines={animal.vaccines}
                                />
                            </Grid>
                        )) : ""}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}
