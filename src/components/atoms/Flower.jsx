import React from 'react'

const Flower = () => {
    const flowers = new Array(30).fill(null);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
            {flowers.map((_, index) => (
                <div
                    key={index}
                    className="flower"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                >
                    <img src="assets/star.png" alt="Flower" className="w-6 h-6" />
                </div>
            ))}
        </div>
    );
}

export default Flower