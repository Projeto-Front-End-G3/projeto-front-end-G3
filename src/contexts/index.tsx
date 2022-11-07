import UserProvider from "./UserContext";
import AnnouncementProvider from "./AnnouncementContext";

type iProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: iProvidersProps) => {
  return (
    <UserProvider>
      <AnnouncementProvider>{children}</AnnouncementProvider>
    </UserProvider>
  );
};

export default Providers;
