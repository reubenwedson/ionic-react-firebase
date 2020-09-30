import {
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText,
    IonAvatar,
    IonLabel, IonItemSliding, IonItemOptions, IonItemOption
} from '@ionic/react';
import React from 'react';
import './Home.css';

const arr = [
    {
        name: 'Finn',
        desc: 'desssdf fdsjvfs fsk fsk s skfksfc'
    },
    {
        name: 'Han',
        desc: 'Loremmmdsds sdnsdsm sdsmms'
    },
    {
        name: 'Ruenne',
        desc: 'Dsjd dsf sdk s sdfs dddddf desc'
    }
]
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
             {arr
                 .map(elem =>(
                     <IonItemSliding key={elem.name}>
                         <IonItem>
                             <IonAvatar>
                                 <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"  alt="avatar"/>
                             </IonAvatar>

                             <IonLabel className="ion-padding">
                                 <h2>{elem.name}</h2>
                                 <p>{elem.desc}</p>
                             </IonLabel>

                             <IonItemOptions side="end">
                                 <IonItemOption>View</IonItemOption>
                             </IonItemOptions>
                         </IonItem>
                     </IonItemSliding>
                 ))}
         </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
