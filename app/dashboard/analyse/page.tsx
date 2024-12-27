'use client';

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { abonnementsUtilisateur } from '../ajouter/actions';
import Link from 'next/link';
import BackButton from '@/app/composants/BackButton';

type Abonnement = {
    nom: string;
};

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [labels, setLabels] = useState<string[]>([]);
    const [donnees, setData] = useState<number[]>([]);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        const fetchAbonnements = async () => {
            const abonnements = await abonnementsUtilisateur();
            const noms = abonnements?.map((e) => e.nom);
            const mensualites = abonnements?.map((e) => e.mensualite);
            if (!noms) {
                setLabels([]);
            }
            else {
                setLabels(noms);
            }

            if (!mensualites) {
                setData([]);
            }
            else {
                setData(mensualites);
            }
        };
        fetchAbonnements();
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            chartInstanceRef.current = new Chart(canvasRef.current, {
                type: 'doughnut',
                data: {
                    labels,
                    datasets: [
                        {
                            label: 'Abonnements',
                            data: donnees,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(205, 205, 86)',
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(145, 205, 86)',
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                            ],
                            hoverOffset: 4,
                        },
                    ],
                },
            });
        }
    }, [labels]);

    return (
        <div className="w-full h-full flex justify-center items-center ">
            <BackButton />
            <div className='w-1/4'>
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    );
}
