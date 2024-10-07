import React, { useState, useEffect } from "react";

// Definir la interfaz que describe la respuesta esperada
interface Activity {
  activity: string;
}

// Función simulada para devolver una actividad ficticia
const mockFetchActivity = async (): Promise<Activity> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        activity: "Go for a walk in the park",
      });
    }, 1000); // Simular un pequeño retraso de 1 segundo
  });
};

const ActivityFetcherTest: React.FC = () => {
  const [activity, setActivity] = useState<string>("");

  // Función para obtener la actividad (simulada)
  const fetchActivity = async () => {
    try {
      const data: Activity = await mockFetchActivity(); // Especificamos el tipo de 'data'
      setActivity(data.activity);
    } catch (error) {
      console.error("Error fetching activity:", error);
    }
  };

  // Llamar a la función simulada cuando el componente se monta
  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <div className="p-4 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-2">
        Activity for when you're bored:
      </h2>
      <p className="text-gray-700">{activity || "Fetching activity..."}</p>
      <button
        onClick={fetchActivity}
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Get Another Activity
      </button>
    </div>
  );
};

export default ActivityFetcherTest;
