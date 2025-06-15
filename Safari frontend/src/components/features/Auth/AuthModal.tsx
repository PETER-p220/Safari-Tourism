import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'register';
};

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialView = 'login'
}) => {
  const [view, setView] = useState(initialView);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-white">
              {view === 'login' ? 'Log In' : 'Create Account'}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          
          {view === 'login' ? (
            <>
              <LoginForm onClose={onClose} />
              <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <button
                  onClick={() => setView('register')}
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
            </>
          ) : (
            <>
              <RegisterForm onClose={onClose} />
              <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className="text-primary hover:underline font-medium"
                >
                  Log in
                </button>
              </p>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AuthModal;