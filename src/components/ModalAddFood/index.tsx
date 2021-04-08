import { useRef } from "react";
import { FoodProps } from "../../types";
import { Form } from "./styles";
import {Modal} from "../Modal";
import {Input} from '../Input';
import { FiCheckSquare } from "react-icons/fi";

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodProps) => Promise<void>;
}

export function ModalAddFood({
  setIsOpen,
  handleAddFood,
  isOpen,
}: ModalAddFoodProps) {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodProps) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
} 