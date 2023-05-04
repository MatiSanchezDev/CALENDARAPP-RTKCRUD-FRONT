import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../Auth/";
import { CalendarPage } from "../Calendar";

export const AppRouter = () => {
  const authStatus = "authenticated";
  return (
    <>
      <Routes>
        {authStatus === "not-authenticated" ? (
          <Route path="/auth/*" element={<LoginPage />} />
        ) : (
          <Route path="/*" element={<CalendarPage />} />
        )}

        {/* Redirigir al usuario si escribe cualquier path que no sea compatible */}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
