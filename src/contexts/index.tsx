import UserProvider from "./UserContext";
import UserProviderNormal from "./UserContextNormal";
import AnnouncementProvider from "./AnnouncementContext";

type iProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: iProvidersProps) => {
  return (
    <UserProviderNormal>
      <UserProvider>
        <AnnouncementProvider>{children}</AnnouncementProvider>
      </UserProvider>
    </UserProviderNormal>
  );
};

export default Providers;
