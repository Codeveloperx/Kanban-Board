import { KEY_MODE, KEY_MODE_CREATE } from "@/constants/Constants";
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

const FormWrapper = React.lazy(
  () => import("@/components/common/form/fields/FormWrapper")
);

const DashBoardLayout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { createBoard } = useBoardActions();

  const formRef = useRef<FormHandle<Board>>(null);

  const mode = searchParams.get(KEY_MODE);
  const isModalOpen = mode === KEY_MODE_CREATE;

  const title = "Crear tablero";

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
