const Container = ({ children }) => {
  return (
    <div className="2xl:container xl:container lg:container md:container sm:container container mx-auto 2xl:px-0 xl:px-0 lg:px-0 md:px-3 sm:px-3 px-3">
      {children}
    </div>
  );
};

export default Container;
