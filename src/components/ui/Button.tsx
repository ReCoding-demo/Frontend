interface Button {
  size: string; // sm, md, lg
  color: string; // 버튼 색상
  children: React.ReactNode; // 버튼 텍스트
  onClick: () => void; // 클릭 이벤트
  fullWidth?: boolean; // width: 100% 여부
}

const Button = ({ size, color, children, onClick, fullWidth }: Button) => {
  const getSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'label-md-pro px-4 py-2 rounded-md';
      case 'md':
        return 'label-md-pro px-4 py-3 rounded-md';
      case 'lg':
        return 'label-lg-pro px-5 py-[14px] rounded-lg';
    }
  };

  const getColor = (color: string) => {
    switch (color) {
      case 'sm':
        return '';
      default:
        return 'bg-green60 text-white';
    }
  };
  return (
    <button
      className={`${fullWidth && 'w-full'} ${getSize(size)} ${getColor(color)} gap-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
