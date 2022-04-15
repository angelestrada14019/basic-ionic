import {
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonItem,
  IonButton,
  IonIcon,
  IonInput,
  IonLabel,
} from "@ionic/react";
import { useParams, useHistory } from 'react-router';
import ExploreContainer from "../../components/ExploreContainer";
import "./CustomerList.css";
import { add, checkmark, close, pencil } from "ionicons/icons";
import { useState, useEffect } from "react";
import { readCustomer, deleteCustomer, addCustomer, searchCustomerById } from "./CustomerApi";

const CustomerEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  const [customer, setCustomer] = useState<any>({
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: ""
  });
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = () => {
      if(id!=='new'){
        let result = searchCustomerById(id);
        setCustomer(result);
      }
 
  };
  const save = () => {
      customer.id=Math.round(Math.random()*100);
    addCustomer(customer);
    history.push("/page/customers");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonTitle>
              {id === "new" ? "Add customer" : "Update customer"}
            </IonTitle>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">First Name</IonLabel>
                  <IonInput
                    onIonChange={(e) => (customer.firstName = e.detail.value)}
                    value={customer.firstName}
                  ></IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Last Name</IonLabel>
                  <IonInput
                    onIonChange={(e) => (customer.lastName = e.detail.value)}
                    value={customer.lastName}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput
                    onIonChange={(e) => (customer.email = e.detail.value)}
                    value={customer.email}
                  >
                  </IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Address</IonLabel>
                  <IonInput
                    onIonChange={(e) => (customer.address = e.detail.value)}
                    value={customer.address}
                  >
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Phone</IonLabel>
                  <IonInput
                    onIonChange={(e) => (customer.phone = e.detail.value)}
                    value={customer.phone}
                  >
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonItem>
              <IonButton onClick={save} color="success" fill="solid" slot="end">
                <IonIcon icon={checkmark} />
                Save Customer
              </IonButton>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
