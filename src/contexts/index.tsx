import UserProvider from "./UserContext";
import UserProviderNormal from "./UserContextNormal";
import AnnouncementProvider from "./AnnouncementContext";

type iProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: iProvidersProps) => {
  return (
    <UserProvider>
      <UserProviderNormal>
        <AnnouncementProvider>{children}</AnnouncementProvider>
      </UserProviderNormal>
    </UserProvider>
  );
};

export default Providers;
