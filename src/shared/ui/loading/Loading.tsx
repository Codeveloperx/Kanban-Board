interface BaseProps {
  text?: string;
}

const Base = ({ text = "Loading..." }: BaseProps) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
    <span className="text-sm font-medium text-gray-600">{text}</span>
  </div>
);

const Overlay = ({ text }: BaseProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm"
    role="status"
    aria-busy="true"
  >
    <Base text={text} />
  </div>
);

const Page = ({ text }: BaseProps) => (
  <div className="min-h-screen flex items-center justify-center">
    <Base text={text} />
  </div>
);

const Modal = ({ text }: BaseProps) => (
  <div className="flex items-center justify-center p-6">
    <div className="flex flex-col items-center gap-3">
      <Base text={text} />
    </div>
  </div>
);

const Loading = {
  Overlay,
  Page,
  Modal,
};

export default Loading;
