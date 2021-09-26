import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
import { TransactionsProvider } from "./hooks/useTransactions";


// Para melhorar acessibilidade do modal 
Modal.setAppElement('#root');


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }


  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      {/* Modal de nova transação */}
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
    </TransactionsProvider>
  );
}

