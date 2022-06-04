const ModalContent = ({ title, children }) => {
  return (
    <div>
      <h1 className="lg-2 font-medium text-gray-600">{title}</h1>

      <div className="flex justify-end mt-[60px] space-x-6">{children}</div>
    </div>
  );
};
export default ModalContent;
