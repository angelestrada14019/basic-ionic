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
} from "@ionic/react";
import { useParams, useHistory} from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import "./CustomerList.css";
import { add, close, pencil } from "ionicons/icons";
import { useState, useEffect } from "react";
import { readCustomer, deleteCustomer } from './CustomerApi';



const CustomerList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
    const [customers, setCustomers] = useState<any[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();
    },[]);

  const search=()=>{
    let result= readCustomer();
    setCustomers(result);
  }
  const remove=(id:String)=>{
    deleteCustomer(id);
    search();
   
  }
  const addCustomer=()=>{
      history.push("/page/customer/new");
  }
  const editCustomer=(id:String)=>{
    history.push('/page/customer/'+id);
}

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
            <IonTitle>Customer Management</IonTitle>
            <IonItem>
              <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end">
                <IonIcon icon={add} />
                Add Customer
              </IonButton>
            </IonItem>
            <IonGrid className="table">
              <IonRow className="header_row">
                <IonCol>Name</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telephone</IonCol>
                <IonCol>Address</IonCol>
                <IonCol>Actions</IonCol>
              </IonRow>
                {customers.map((customer: any) => {
                    return (

              <IonRow key={customer.id}>
                <IonCol>{customer.firstName} {customer.lastName}</IonCol>
                <IonCol>{customer.email}</IonCol>
                <IonCol>{customer.phone}</IonCol>
                <IonCol>{customer.address}</IonCol>
                <IonCol>
                  <IonButton onClick={()=>editCustomer(customer.id)} color="primary" fill="clear">
                    <IonIcon icon={pencil} />
                  </IonButton>
                  <IonButton onClick={()=>remove(customer.id)} color="danger" fill="clear">
                    <IonIcon icon={close} />
                  </IonButton>
                </IonCol>
              </IonRow>
                    )
                })}

            </IonGrid>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
