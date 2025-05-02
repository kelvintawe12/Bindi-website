import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../common/ProgressBar';
import { Button } from '../common/Button';

interface ErrorPageProps {
  errorCode?: string;
  errorMessage?: string;
  onRetry?: () => Promise<void>;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = '500',
  errorMessage = 'Oops! Something went wrong.',
  onRetry,
}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const maxProgress = 100;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loading) {
      timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= maxProgress) {
            clearInterval(timer);
            return maxProgress;
          }
          return oldProgress + 10;
        });
      }, 100);
    } else {
      setProgress(0);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [loading]);

  const handleRetry = async () => {
    if (!onRetry) return;
    setLoading(true);
    try {
      await onRetry();
    } catch (error) {
      // Optionally handle retry error here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">{errorCode}</h1>
        <p className="text-xl text-gray-700 mb-6">{errorMessage}</p>
        {loading ? (
          <ProgressBar value={progress} max={maxProgress} label="Retrying..." />
        ) : (
          <Button onClick={handleRetry} className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Retry
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
