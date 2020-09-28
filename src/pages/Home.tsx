import {IonItem, IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
         <IonList>
             {Array(10)
                 .fill(0)
                 .map((_, i) =>(
                     <IonItem key={i}>
                         <IonText>
                             List Item {i}
                         </IonText>
                     </IonItem>
                 ))}
         </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
