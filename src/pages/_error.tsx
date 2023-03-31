interface ErrorProps {
  statusCode: number;
  message: string;
}

const defaultClientMessage = "An error occurred on the client";

export default function Error({
  statusCode,
  message = defaultClientMessage,
}: ErrorProps) {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      {statusCode && (
        <p className="font-semibold text-4xl text-gray-400">{statusCode}</p>
      )}
      <span className="font-semibold text-2xl text-gray-300">{message}</span>

      <button
        onClick={() => window.location.reload()}
        className="bg-gray-400 text-gray-200 py-2 px-4 mt-4 rounded-md hover:bg-opacity-90 active:bg-opacity-90 ring-2 focus:ring-gray-400 focus:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
