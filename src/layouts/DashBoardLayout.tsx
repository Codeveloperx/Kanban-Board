import { Outlet } from "react-router-dom";
import { useBoardActions } from "@/hooks/useBoardActions";
import { useOpen } from "@/hooks/useOpen";
import { UUID } from "@/utils/uuid";
import fields from "@/layouts/form.json";
import Header from "@/components/header/Header";
import Loading from "@/components/common/loading/Loading";
import React, { Suspense, useRef } from "react";
import SideBar from "@/components/sidebar/SideBar";
const Modal = React.lazy(() => import("@/components/common/modals/Modal"));

const FormWrapper = React.lazy(
  () => import("@/components/common/form/fields/FormWrapper")
);

import type { Board, Field, FormHandle } from "@/types";

const DashBoardLayout = () => {
  const { createBoard } = useBoardActions();
  const formRef = useRef<FormHandle<Board>>(null);

  const title = "Crear nuevo tablero";

  const {
    isOpen: isOpenModal,
    onClose: onCloseModal,
    onOpen: onOpenModal,
  } = useOpen();

  const handleNewBoard = () => {
    const values = formRef.current?.get();

    if (!values) return;
    
    createBoard({ id: UUID(), name: values.name, color: values.color });
    formRef.current?.clear();
    onCloseModal();
  };

  return (
    <div className="flex h-screen border-2">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header showAction={true} onActionClick={onOpenModal} />
        <main className="h-full p-6 flex-1 overflow-y-auto overflow-x-auto bg-gray-50">
          <Outlet />
        </main>
      </div>

      {isOpenModal && (
        <Modal title={title} onClose={onCloseModal} onConfirm={handleNewBoard}>
          <Suspense fallback={<Loading.Modal />}>
            <FormWrapper ref={formRef} fields={fields as Field[]} />
          </Suspense>
        </Modal>
      )}
    </div>
  );
};

export default DashBoardLayout;
