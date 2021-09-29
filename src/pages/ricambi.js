import React from 'react';
import Layout from '@theme/Layout';
import Upgrades from '../components/Upgrades'
import { upgradesData } from '../data/ricambiData';


export default function UpgradesPage() {
  return (
    <Layout>
    <div >
			<h1 className='pageTitle'>Ricambi Flying-Bear Ghost</h1>
		</div>
		<div  className='pageDescription'>
			<p>In questa pagina troverai l'elenco dei ricambi per migliorare
			ancora di più la tua stampante 3d Flying Bear Ghost</p>
		</div>
      <Upgrades data={upgradesData}/>
    </Layout>
  );
}
