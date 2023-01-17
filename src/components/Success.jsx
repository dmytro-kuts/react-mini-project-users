import React from "react";

export const Success = ({ count }) => {
    return (
        <div class="success-block">
            <img src="./assets/success.svg" alt="Success" />
            <h3>Успішно!</h3>
            <p>Всім {count} користувачам надіслано запрошення.</p>
            <button
                onClick={() => window.location.reload()}
                className="send-invite-btn"
            >
                Назад
            </button>
        </div>
    );
};
