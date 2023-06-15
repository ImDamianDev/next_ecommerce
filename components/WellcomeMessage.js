import { useSession } from "next-auth/react";

const WellcomeMessage = () => {
  const { data: session } = useSession();

  if (session) {
    const { user } = session;
    return <p className="text-center">Bienvenido, {user.name} !</p>;
  }
};

export default WellcomeMessage;
