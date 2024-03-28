interface ProfileImg {
  size: string;
  imgUrl?: string;
}

const ProfileImg = ({ size, imgUrl }: ProfileImg) => {
  const getSize = (size: string) => {
    switch (size) {
      case 'sm':
        return 'w-5 h-5';
      case 'md':
        return 'w-7 h-7';
      case 'lg':
        return 'w-9 h-9';
      case 'xl':
        return 'w-[100px] h-[100px]';
    }
  };
  return (
    <div
      className={`${getSize(size)} flex justify-center items-center rounded-full overflow-hidden bg-gray20`}
    >
      <img
        src={imgUrl || '/icons/profile.svg'}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImg;
