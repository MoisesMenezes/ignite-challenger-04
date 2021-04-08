import { useRef } from "react";
import { FiCheckSquare } from 'react-icons/fi';
import { FoodProps } from "../../types";

import { Form } from './styles';
import {Modal} from '../Modal';
import {Input} from '../Input';


interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodProps;
  handleUpdateFood: (food: FoodProps) => Promise<void>;
}

export function ModalEditFood({ editingFood, handleUpdateFood,isOpen,setIsOpen}: ModalEditFoodProps){
  const formRef = useRef(null);


  const handleSubmit = async (data: FoodProps) => {
    handleUpdateFood(data);
    setIsOpen();
  };


  return(
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
    <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
      <h1>Editar Prato</h1>
      <Input name="image" placeholder="Cole o link aqui" />

      <Input name="name" placeholder="Ex: Moda Italiana" />
      <Input name="price" placeholder="Ex: 19.90" />

      <Input name="description" placeholder="Descrição" />

      <button type="submit" data-testid="edit-food-button">
        <div className="text">Editar Prato</div>
        <div className="icon">
          <FiCheckSquare size={24} />
        </div>
      </button>
    </Form>
  </Modal>
  )
}