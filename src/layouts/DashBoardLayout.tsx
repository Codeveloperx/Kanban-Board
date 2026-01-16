import {
  KEY_ID,
  KEY_MODE,
  KEY_MODE_CREATE,
  KEY_MODE_UPDATE,
} from "@/constants/Constants";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { route } from "@/router/routes.helper";
import { useBoardActions } from "@/hooks/useBoardActions";
import { UUID } from "@/utils/uuid";
import fields from "@/layouts/form.json";
import Header from "@/components/header/Header";
import Loading from "@/components/common/loading/Loading";
import Modal from "@/components/common/modals/Modal";
import React, { Suspense, useRef } from "react";
import SideBar from "@/components/sidebar/SideBar";

import type { Board, Field, FormHandle } from "@/types";
import { useBoardById } from "@/hooks/useBoardById";

const FormWrapper = React.lazy(
  () => import("@/components/common/form/fields/FormWrapper")
);

const DashBoardLayout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { createBoard, updateBoard } = useBoardActions();

  const formRef = useRef<FormHandle<Board>>(null);

  const mode = searchParams.get(KEY_MODE);
  const id = searchParams.get(KEY_ID);
  const isModalOpen = mode === KEY_MODE_CREATE || mode === KEY_MODE_UPDATE;
  const values = useBoardById(id);

  const title = id ? "Editar tablero" : "Crear tablero";

  const onOpenModal = () => {
    navigate(route.create());
  };

  const onCloseModal = () => {
    navigate(route.boards());
  };

  const handleNewBoard = () => {
    const values = formRef.current?.get();

    if (!values) return;

    createBoard({
      id: UUID(),
      name: values.name,
      color: values.color,
      active: true,
    });
    formRef.current?.clear();
    onCloseModal();
  };

  const handleUpdateBoard = () => {
    const values = formRef.current?.get();

    if (!values) return;

    updateBoard({
      ...values,
      name: values.name,
      color: values.color,
    });

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

      {isModalOpen && (
        <Modal
          title={title}
          onClose={onCloseModal}
          onConfirm={!id ? handleNewBoard : handleUpdateBoard}
        >
          <Suspense fallback={<Loading.Modal />}>
            <FormWrapper
              ref={formRef}
              fields={fields as Field[]}
              data={values}
            />
          </Suspense>
        </Modal>
      )}
    </div>
  );
};

export default DashBoardLayout;
